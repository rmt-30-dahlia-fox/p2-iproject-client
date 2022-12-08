<script></script>
<template>
  <div class="hero">
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
            <input type="password" placeholder="password" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="John Doe" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input type="text" placeholder="+12345" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Identity Type</span>
            </label>
            <select class="select select-bordered w-full active">
              <option disabled selected>Identity Type</option>
              <option>Visa</option>
              <option>ID</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Identity Number</span>
            </label>
            <input type="text" placeholder="+12345" class="input input-bordered" />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-info">Register</button>
          </div>
        </div>
      </div>

  </div>
</template>