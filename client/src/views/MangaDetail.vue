<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    computed: {
        ...mapWritableState(useCounterStore, ['mangaDetail', 'loading', 'loggedIn'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMangaDetail', 'addToWantToRead',]),
        onClickWantToRead() {
            console.log('test');
            if (this.loggedIn) {
                this.addToWantToRead()
            } else {
                this.$router.push('/login')
            }
        }

    },
    created() {
        this.fetchMangaDetail(this.$route.params.id)
        if (localStorage.access_token) {
            this.loggedIn = true
        } else {
            this.loggedIn = false
        }
    }
}

</script>
<template>
    <div v-if="!loading" class="container " style="margin-top: 20px ;">
        <h1 class="text-center">{{ mangaDetail ? mangaDetail.title : "" }}</h1>
        <div class="d-flex flex-row-reverse">
            <button @click="onClickWantToRead">Add to Want To Read</button>
        </div>


        <div class="d-flex">
            <div style="margin-top: 15px ;">
                <img :src="mangaDetail ? mangaDetail.main_picture.large : ''" alt="image here" width="500" />
            </div>

            <div style="margin-top: 20px ;">
                <div class="d-flex justify-content-between">
                    <div class="mx-5 my-3">
                        <table style=" color: black ">
                            <tbody>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Rating

                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            <img className="mb-1"
                                                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                                                style="width: 21px " alt="" />
                                            {{ mangaDetail ? mangaDetail.mean : `` }}

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Rank
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            {{ mangaDetail ? mangaDetail?.popularity : " " }}
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Author
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            {{ mangaDetail ? mangaDetail?.authors[0].node.first_name + " " +
        mangaDetail?.authors[0].node.last_name : " "
}}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        First Published
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            {{ mangaDetail ? (new
        Date(mangaDetail?.start_date)).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : " "
}}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Status
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            {{ mangaDetail ? mangaDetail?.status.split('_').join(' ') : " " }}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Serialization
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            {{ mangaDetail ? mangaDetail.serialization[0]?.node.name : " " }}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Cover Examples
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Open
                                            </button>

                                            <!-- Modal -->
                                            <div class="modal fade" id="exampleModal" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Pictures
                                                            </h1>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close">Dismiss</button>
                                                        </div>
                                                        <div v-if="mangaDetail.pictures" class="modal-body">
                                                            <div class="container text-center">
                                                                <div class="row row-cols-2">
                                                                    <div v-for="picture in mangaDetail.pictures"
                                                                        class="col">
                                                                        <img :src="picture.medium" alt=""
                                                                            style="margin: 5px;">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style="font-family:Arial, Helvetica, sans-serif; font-weight: bold;font-size:20px;">
                                        Manga Recommendation
                                    </th>
                                    <td>
                                        <div style="margin: 10px 80px">
                                            {{ mangaDetail ? mangaDetail?.recommendations.map(el => {
        return el.node.title
    }).join(', ') : " "
}}
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div style="margin-top: 25px ;"><text>{{ mangaDetail ? mangaDetail.synopsis : `` }}</text></div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
button {
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border-radius: 3px;
    padding: 0 16px;
    border-radius: 4px;
    color: #fff;
    background: #6200ee;
    line-height: 1.15;
    font-size: 14px;
    height: 36px;
    word-spacing: 0px;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 64px;
    border: none;
    text-align: center;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

}
</style>