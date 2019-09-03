import {collatedTasks} from '../constants' 

export const collatedTaskExists = selectedProject => 
    collatedTasks.find(task => task.key === selectedProject)


