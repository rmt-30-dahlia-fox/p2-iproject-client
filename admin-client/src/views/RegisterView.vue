<script></script>
<template>
  <div class="hero min-h-screen bg-base-200"
    style="background-image: url(https://images.unsplash.com/photo-1511562161941-905f880e02cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);">

    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-center font-bold text-3xl">Register</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" class="input input-bordered" />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-info">Register</button>
          </div>
        </div>
      </div>

    </div>

    <!-- <RouterView /> -->
  </div>
</template>