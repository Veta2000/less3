<template>
    <div>
      <p v-if="isConfirmed">Запись подтверждена!</p>
      <p v-else>Запись ожидает подтверждения</p>
      <button @click="toggleStatus">Переключить статус</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isConfirmed = ref(false);
  
  function toggleStatus() {
    isConfirmed.value = !isConfirmed.value;
  }
  </script>
  