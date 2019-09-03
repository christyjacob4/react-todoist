import React from "react";
import {
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
  FaChevronDown
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li data-testid="inbox" className="inbox">
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li data-testid="today" className="today">
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li  data-testid="next_7" className="next_7">
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 Days</span>
      </li>
    </ul>

    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">
        Projects will be here.
    </ul>

    Add Project component here;
  </div>
);
