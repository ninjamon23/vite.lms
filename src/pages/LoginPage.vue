<template>
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-5">
        <form class="mt-5 px-2" @submit.prevent="verify">
          <div class="mx-5 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="150"
              fill="currentColor"
              class="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path
                d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
            <h1>Learning Management System</h1>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              v-model="loginForm.email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="loginForm.password"
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
                v-if="isVerifying"
              ></span>
              <span class="ms-2">{{ isVerifyingText }}</span>
            </button>
          </div>
          <hr />
          <div class="d-grid gap-2 mt-5">
            <button type="submit" class="btn btn-primary">
              Login via Google
            </button>
            <button type="submit" class="btn btn-primary">
              Login via Microsoft Account...
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = ref({
  email: '',
  password: '',
  loginCheck: false,
})

const isVerifying = ref(false)
const isVerifyingText = computed(() =>
  isVerifying.value ? 'Verifying ....' : 'Verify'
)
const verify = () => {
  isVerifying.value = true
  setTimeout(() => {
    isVerifying.value = false

    router.push('/')
  }, 3000)
}
</script>
