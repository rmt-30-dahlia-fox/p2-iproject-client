<script>
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/global";

export default {
  data() {
    return {
      isLiked: false
    }
  },
  props: ['activity', 'myActivity'],
  computed: {
    ...mapState(useGlobalStore, ['isLogin', 'user']),
    getTime() {
      let time
      if(this.$route.name == 'HomePage') {
        time = new Date(this.activity.createdAt)
      } else if (this.$route.name == 'ActivitiesPage') {
        time = new Date(this.myActivity.createdAt)
      }
      return time.toLocaleDateString('id-ID')
    }
  },
  created() {
    if (this.$route.name == 'HomePage') {
      this.activity.Likes.forEach(el => {
        if (el.UserId == this.user.id) this.isLiked = true
      })
    }
  }
}
</script>

<template>
  <article class="rounded-xl border-2 border-gray-100 bg-white">
    <div class="flex items-start p-6 justify-between">
      <a href="#" class="block shrink-0">
        <img
          v-if="this.$route.name == 'HomePage'"
          alt="Speaker"
          :src="activity.User.imageProfile"
          class="h-14 w-14 rounded-lg object-cover"
        />

        <img
          v-if="this.$route.name == 'ActivitiesPage'"
          alt="Speaker"
          :src="myActivity.User.imageProfile"
          class="h-14 w-14 rounded-lg object-cover"
        />
      </a>

      <div class="ml-4 grow">
        <h3 class="font-medium sm:text-lg">
          <a v-if="this.$route.name == 'HomePage'" class="hover:underline"> {{ activity.User.fullName }} </a>
          <a v-if="this.$route.name == 'ActivitiesPage'" class="hover:underline"> {{ myActivity.User.fullName }} </a>
        </h3>

        <p v-if="this.$route.name == 'HomePage'" class="text-sm text-gray-700 line-clamp-2">
          {{ getTime }} - {{ activity.User.city }}
        </p>

        <p v-if="this.$route.name == 'ActivitiesPage'" class="text-sm text-gray-700 line-clamp-2">
          {{ getTime }} - {{ myActivity.User.city }}
        </p>
      </div>

      <div
        v-if="isLogin"
        class="flex cursor-pointer items-center justify-center"
      >
        <div v-if="this.$route.name == 'HomePage'">
          <img
            v-if="!isLiked"
            src="../assets/heart-no-fill.png"
            width="36"
            height="36"
            alt=""
          />
          <img
            v-if="isLiked"
            src="../assets/heart-fill.png"
            width="36"
            height="36"
            alt=""
          />
        </div>

        <div v-if="this.$route.name == 'ProfilePage'">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 36 36"
            width="36px"
            height="36px"
          >
            <g id="surface60096684">
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(98.039216%, 32.156864%, 32.156864%);
                  fill-opacity: 1;
                "
                d="M 15.601562 3.601562 C 15.277344 3.59375 14.96875 3.71875 14.742188 3.945312 C 14.511719 4.171875 14.382812 4.480469 14.382812 4.800781 L 7.199219 4.800781 C 6.765625 4.792969 6.363281 5.019531 6.148438 5.394531 C 5.929688 5.769531 5.929688 6.230469 6.148438 6.605469 C 6.363281 6.980469 6.765625 7.207031 7.199219 7.199219 L 28.800781 7.199219 C 29.234375 7.207031 29.636719 6.980469 29.851562 6.605469 C 30.070312 6.230469 30.070312 5.769531 29.851562 5.394531 C 29.636719 5.019531 29.234375 4.792969 28.800781 4.800781 L 21.617188 4.800781 C 21.617188 4.480469 21.488281 4.171875 21.257812 3.945312 C 21.03125 3.71875 20.722656 3.59375 20.398438 3.601562 Z M 7.199219 9.601562 L 7.199219 28.800781 C 7.199219 30.125 8.273438 31.199219 9.601562 31.199219 L 26.398438 31.199219 C 27.726562 31.199219 28.800781 30.125 28.800781 28.800781 L 28.800781 9.601562 Z M 7.199219 9.601562 "
              />
            </g>
          </svg> -->
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAADdklEQVRYhe3YS2wbRRzH8e9/7CRuC1QRj3KoiF0BF1fQIhRbAgqhQaKIikvqS08cUJxQkMIRqagVnDnwyK44wKEHpKS8BFxopVRCKrZzIUY+FdWOkEAtAQo0qRNn58/BdeTHOg97g3ro7zSe2V19dvTfmV3D7VTzwPeT/cycCjf3y/8OmXWeEIsrsB+4AbgsRd4sDb1cBmgRbmcGZiePiOVzIHKzawcwwc4ywBuwzgw9eOm9Pvt3355V9baE1mWv/MuTr/3a3B/NTCYRuQD0+Zy2VFq6spuhU6stoFjOPWStnkR4RjqcQVEdLSbHP6rvixemehev/zEFvOR7Um+5v3Rw4pppwGSdE6o6I8JwpxgAjGitOZBxX4hlJh8pxFMru+64OwV81XoH/FQ6OHGt2qxhcu4hVZ0BDJAX9B0MeQ8qW7GIhG7MPz76G8C+rPOihc8U/jGqh4vJ8bzPTC2r2GfnB1+92AjKOucVDgN5liKJWtV3mhoG6AVQWPBBPW9g5HJi7Ju1G4JqAVf+7LkuEBaVY8Vk+myQmFoUFgwyXEyk5+KFqd7FfxceKyXHM/XHhAH0r9B9tZoRWc13g4nl3KNW9WwzBkDgHouej2Xd4UI8NQdkmo8xAJ5nQrUOa0Mr3WC0DaYOdZfF7m03btoNbDUDs5NHVHV6PQywgkpqPjH+7baCqiuwfIH/oteAKSXTrY99kKBYzj0qVr7cCCMiIzVMNOumo1lnNHDQZmqmhikOpr8GiOY+vB/UAdxqOyBQ9AcnupmaqccA4JmIb7tbkBqOs4maacBsIh2DBI5thNmogAMD7ct+8DDwaNCYjkEeZqTN0HL909RJOnvfEXkObej5UbHT0PNpafCVYqeYzkGWj9WAqp4LqZm+nExf6gbRNaiYHDsDnAkKUZ/A9rKgchu0UW5NUChkvbUO4623N3UdCevadhOW8KovSPq9qwqrAIpptwIHElVz4Gaz0nfn7qu+oJ8fen0Z5QKARd6KznzSsgsHkb0X392BcrL6S2YK8VTL6/LaOhTCnLbYIYH9urM8G8s5byM6t9XvMr+EoEfVHKhiNA54Kt5pv2MbPqWjOWcM5f3qNbYtHsiJUiLt+g02PGWlwTHHGp5GOEcAM9OUCsh3ijzVDgPr/PsRL0z1lhd/31MR6elW0qNaiey694pfzdzy+Q8N4mmy1oQp/wAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </div>

    <a href="#" class="px-6 block">
      <img
        alt="Art"
        :src="activity.imageActivity"
        class="h-96 w-full object-cover"
      />

      <h3 class="mt-4 text-xl font-bold text-gray-900">
        {{ activity.name }}
        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
        >
          {{ activity.Type.name }}
        </span>
      </h3>

      <p class="mt-2 max-w-sm text-gray-700">{{ activity.caption }}</p>
    </a>

    <div class="flex justify-end">
      <strong
        class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
      >
        <span class="text-[10px] font-medium sm:text-xs">{{
          activity.Difficulty.name
        }}</span>
      </strong>
    </div>
  </article>
</template>
