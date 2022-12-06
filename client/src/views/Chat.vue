<script></script>

<template>
  <div id="chat-container" class="flex flex-row flex-grow h-100">
    <div class="flex flex-col flex-grow">
      <div class="text-center">
	<h1 class="text-xl font-bold">Chat with Eric Frusciante</h1>
      </div>
      <div id="chat-messages" class="flex-grow"></div>
      <div>
	<form action="" class="flex flex-row">
	  <div class="flex items-center flex-grow">
	    <input class="w-full" type="text" placeholder="Chat">
	  </div>
	  <div>
	    <input
	      class="block px-5 py-3 m-4 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer transition hover:bg-indigo-700 focus:outline-none focus:ring"
	      type="submit" value="Send"
	    >
	  </div>
	</form>
      </div>
    </div>
  </div>
</template>

<style></style>
