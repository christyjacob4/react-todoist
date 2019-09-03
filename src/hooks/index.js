import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTaskExists } from "../helpers";
import moment from "moment";

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "hYGihujhgikGuiGKjh");

    unsubscribe =
      selectedProject && !collatedTaskExists(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTask = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      // If you've selected NEXT7 as the project, filter those tasks that are older than 7 days and
      // are archived
      setTasks(
        selectedProject === "NEXT_7"
          ? newTask.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTask.filter(task => task.archived !== true)
      );

      setArchivedTasks(newTask.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);
  // What this means is that when selectedProject changes, re-run all of this.

  return { tasks, archivedTasks };
};

export const useProjecs = () => {
  // React Hook to update projects by calling the setProjects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "hYGihujhgikGuiGKjh")
      .orderBy("projectId")
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
