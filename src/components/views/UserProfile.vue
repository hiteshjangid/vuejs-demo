<template>
	<div class="profile-form">
		<h4>User Profile</h4>
		<b-form @submit="onSubmit" v-if="show">
			<b-form-group id="input-group-2" label="Full Name:" label-for="input-name" label-cols-lg="2" content-cols-lg="4" content-cols-sm="8">
				<b-form-input id="input-name" v-model="form.employee_name" placeholder="Enter Fullname" required></b-form-input>
			</b-form-group>

			<b-form-group id="email-address-gro" label="Email address:" label-for="input-email" label-cols-lg="2" content-cols-lg="4" content-cols-sm="8">
				<b-form-input id="input-email" v-model="form.email" type="email" readonly>
				</b-form-input>
			</b-form-group>

			<b-form-group id="input-group-3" label="Department:" label-for="input-3" label-cols-lg="2" content-cols-lg="4" content-cols-sm="8">
				<b-form-select id="input-3" v-model="form.department_id" :options="departments" required></b-form-select>
			</b-form-group>

			<div class="form-btns">
				<b-button type="submit" variant="primary">Save</b-button>
				<b-button type="button" variant="danger" @click="goBack">Back</b-button>
			</div>
		</b-form>
	</div>
</template>

<script>

export default {
	name: "UserProfile",
	data() {
		return {
			userId: "11915930-e1a5-11eb-ba80-0242ac130004", //fix as of now for getting one of the employee profile data
			form: {
				email: '',
				employee_name: '',
				department_id: null,
				checked: []
			},
			departmentSelect: { value: null, text: 'Please select Department' },
			show: true
		}
	},
	created(){
		this.$store.commit('setUserId', this.userId);
	},
	mounted(){
		this.form =  {...this.form, ...this.$store.getters.userProfile};
	},
	methods: {
		onSubmit(event) {
			event.preventDefault()
			// alert(JSON.stringify(this.form))
		},
		goBack() {
			this.$router.push({path:'/'});
		}
	},
	computed:{
		departments(){
			const departments = this.$store.getters.getDepartments;
			departments.unshift(this.departmentSelect);
			return departments;
		}
	}
}
</script>
<style lang="scss" scoped>
.profile-form{
	margin-top: 20px;
	text-align: left;
	.form-btns{
		button{
			margin-right: 15px;
			&:last-child{
				margin-right: 0px;
			}
		}
	}
}
</style>