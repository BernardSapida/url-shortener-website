<template>
  <div id="app">
    <b-navbar class="px-5" toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">URL Shortener</b-navbar-brand>
    </b-navbar>

    <div class="container mt-5">
      <div class="alert alert-success" role="successAlert" v-if="alert_success">Successfully copied to clipboard.</div>
      <div class="alert alert-danger" role="dangerAlert" v-if="alert_failed">Invalid URL! Please enter a valid URL.</div>
      <h1>URL Shortener</h1>
      <p>URL Shortener is a tool to shorten URLs. Create short links & easy to remember links in seconds.</p>
      <form @submit.prevent>
        <div class="form-group flex">
          <div class="input-group input-group-lg">
            <input type="text" class="form-control" v-model="long_url" aria-label="Large" aria-describedby="long url" placeholder="Long URL">
          </div>
          <button type="submit" @click="shortenURL" class="btn btn-primary">Short URL</button>
        </div>
      </form>
      <div class="row border rounded mt-4 p-2" v-if="isShortened">
        <div class="col-auto">
          <p>{{ long_url.slice(0, 27) }}...</p>
        </div>
        <div class="col-auto">
          <p class="shortened_url text-primary" id="generated_url"><strong>{{ shortened_url }}</strong></p>
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-dark py-2 clipboard" data-clipboard-target="#generated_url" @click="copyToClipboard"><font-awesome-icon icon="fa-solid fa-clipboard" /> Copy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './js/clipboard.js'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      access_token: "fc1188d26d83c9d7d54c56d88713ede7c6973bf1",
      long_url: "",
      shortened_url: "",
      guid: "",
      isShortened: false,
      alert_success: false,
      alert_failed: false,
      show: true
    }
  },
  created() {
    fetch('https://api-ssl.bitly.com/v4/groups', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.access_token}`,
        "Content-Type": "application/json" 
      }
    })
    .then(response => response.json())
    .then(data => this.guid = data.groups[0].guid);
  },
  methods:{
    async shortenURL() {
      this.isShortened = false;

      if(this.long_url == '') { 
        setTimeout(() => this.alert_failed = false, 2000);
        this.alert_failed = !this.alert_failed;
        return;
      }

      let requestURL = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${this.access_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          "group_guid": this.guid,
          "domain": "bit.ly",
          "long_url": this.long_url
        })
      })

      let response = await requestURL.json();

      if(response.message !== "INVALID_ARG_LONG_URL") {
        this.isShortened = !this.isShortened;
        this.shortened_url = response.link
      } else {
        setTimeout(() => this.alert_failed = false, 2000);
        this.alert_failed = !this.alert_failed;
      }
    },
    copyToClipboard() {
      setTimeout(() => this.alert_success = false, 2000);
      this.alert_success = !this.alert_success;
    }
  }

}
</script>

<style>
  @import url("../public/css/app.css");
</style>
