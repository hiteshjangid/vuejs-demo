/*jshint esversion: 6 */
import Vue from "vue";
import Router from "vue-router";
import { EmployeeListing, DepartmentListing, UserProfile, ErrorComponent, DummyPage } from "../components/views";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "employee/",
        },
        {
            path: "/profile",
            name: "profile",
            component: UserProfile,
        },
        {
            path: "*",
            component: ErrorComponent,
        },
        {
            path: "/employee",
            name: "employee-list",
            component: EmployeeListing,
        },
        {
            path: "/department",
            name: "department-list",
            component: DepartmentListing,
        },
        /* 
            department & employee add path are added as independed route, instead of children.
            Since only App compnent is handling router-view. 
            There should a parent component to handle the router-view like a dashboard
        */
        {
            path: "/department/add",
            name: "department-add",
            component: DummyPage,
        },
        {
            path: "/employee/add",
            name: "employee-add",
            component: DummyPage,
        },
    ],
});