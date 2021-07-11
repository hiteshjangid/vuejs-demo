import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userId:null,
        departments: {
            data: [
                { department_id:"1127f79a-e1b1-11eb-ba80-0242ac130004", department_name: 'Web',},
                { department_id:"1127fba0-e1b1-11eb-ba80-0242ac130004", department_name: 'Mobile',},
                { department_id:"1127fcae-e1b1-11eb-ba80-0242ac130004", department_name: 'Sales',},
            ],
            fields: ['department_name'],
        },
        users: {
            data: [
                { employee_id:'11915520-e1a5-11eb-ba80-0242ac130004', employee_name: 'Dickerson Macdonald', email:'dickerson.macdonald@gmail.com', isActive: true, age: 40, department_id: "1127f79a-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915782-e1a5-11eb-ba80-0242ac130004', employee_name: 'Larsen Shaw', email:'larsen.shaw@gmail.com', isActive: false, age: 21, department_id: "1127fba0-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915868-e1a5-11eb-ba80-0242ac130004', employee_name: 'Geneva Wilson', email:'geneva.wilson@gmail.com', isActive: false, age: 29, department_id: "1127fcae-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915930-e1a5-11eb-ba80-0242ac130004', employee_name: 'Hitesh Jangid', email:'hitesh.jangid@gmail.com', isActive: true, age: 35, department_id: "1127f79a-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'119159ee-e1a5-11eb-ba80-0242ac130004', employee_name: 'Robert Downey', email:'robert.downey@gmail.com', isActive: true, age: 31, department_id: "1127fcae-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915aa2-e1a5-11eb-ba80-0242ac130004', employee_name: 'Brad Pitt', email:'brad.pitt@gmail.com', isActive: true, age: 33, department_id: "1127fba0-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915b60-e1a5-11eb-ba80-0242ac130004', employee_name: 'George Clooney', email:'george.clooney@gmail.com', isActive: true, age: 35, department_id: "1127fcae-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915c28-e1a5-11eb-ba80-0242ac130004', employee_name: 'Christian Bale', email:'christian.bale@gmail.com', isActive: true, age: 31, department_id: "1127fcae-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915eda-e1a5-11eb-ba80-0242ac130004', employee_name: 'Mark Wahlberg', email:'mark.wahlberg@gmail.com', isActive: true, age: 41, department_id: "1127f79a-e1b1-11eb-ba80-0242ac130004" },
                { employee_id:'11915fa2-e1a5-11eb-ba80-0242ac130004', employee_name: 'Matt Damon', email:'matt.damon@gmail.com', isActive: true, age: 25, department_id: "1127f79a-e1b1-11eb-ba80-0242ac130004" }          
            ],
            fields: [ 'employee_name', 'email', 'isActive', 'age', ],
        }
    },
    getters: {
        getDepartments(state) {
            return state.departments.data.map((department) => {
                return {
                    text:department.department_name,
                    value: department.department_id
                };
            });
        },
        userProfile(state) {
            return state.users.data.find((user) => {
                return user.employee_id == state.userId;
            });
        },
        totalRegistrations(state) {
            return state.registrations.length;
        },
    },
    mutations: {
        setUserId(state, userId) {
            console.log(userId);
            state.userId = userId;
        },
    },
});
