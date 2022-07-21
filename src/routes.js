import React from "react";
import { Link } from "react-router-dom";

// Layout Types
import { BaseLayout } from "./layouts";
// Route Views
import Dashboard from "./Copmonents/Dashboard/Dashboard";
import AddStudent from "./Copmonents/Student/AddStudent/AddStudent"
import DeleteStudent from "./Copmonents/Student/DeleteStudent/DeleteStudent";
import ListStudent from "./Copmonents/Student/ListStudent/ListStudent";
import ViewStudent from "./Copmonents/Student/ViewStudent/ViewStudent";
import StudentEdit from "./Copmonents/Student/StudentEdit/StudentEdit";
import AddSubject from "./Copmonents/Subject/AddSubject/AddSubject";
import DeleteSubject from "./Copmonents/Subject/DeleteSubject/DeleteSubject"
import EditSubject from "./Copmonents/Subject/EditSubject/EditSubject"
import ListSubject from "./Copmonents/Subject/ListSubject/ListSubject";



var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: () => <Link to="/dashboard" />,
  },
  {
    path: "/dashboard",
    layout: BaseLayout,
    component: Dashboard,
  },

  {
    path: "/AddStudent",
    layout: BaseLayout,
    component: AddStudent,
  },

  {
    path: "/DeleteStudent",
    layout: BaseLayout,
    component: DeleteStudent,
  },

  {
    path: "/ListStudent",
    layout: BaseLayout,
    component: ListStudent,
  },
  {
    path: "/ViewStudent",
    layout: BaseLayout,
    component: ViewStudent,
  },
  {
    path: "/StudentEdit",
    layout: BaseLayout,
    component: StudentEdit,
  },

  {
    path: "/AddSubject",
    layout: BaseLayout,
    component: AddSubject,
  },

  {
    path: "/EditSubject",
    layout: BaseLayout,
    component: EditSubject,
  },
  {
    path: "/DeleteSubject",
    layout: BaseLayout,
    component: DeleteSubject,
  },
  {
    path: "/ListSubject",
    layout: BaseLayout,
    component: ListSubject,
  },
  // {
  //   path: "/dashio-admin/tables",
  //   layout: BaseLayout,
  //   component: Tables,
  // },
  // {
  //   path: "/dashio-admin/pages",
  //   layout: BaseLayout,
  //   component: Pages,
  // },

  // {
  //   path: "/dashio-admin/charts",
  //   layout: BaseLayout,
  //   component: Charts,
  // },
];

export default routes;
