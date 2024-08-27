<template>
    <div>
      <h1>Форма записи на СТО</h1>
      <AppointmentForm @submit="handleAppointment" />
  
      <div v-if="appointments.length > 0">
        <h2>Запланированные записи</h2>
        <AppointmentCard
          v-for="(appointment, index) in appointments"
          :key="index"
          :appointment="appointment"
        />
      </div>
  
      <StatusMessage />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AppointmentForm from './AppointmentForm.vue';
  import AppointmentCard from './AppointmentCard.vue';
  import StatusMessage from './StatusMessage.vue';
  
  const appointments = ref([]);
  
  function handleAppointment(newAppointment) {
    console.log('New appointment:', newAppointment); 
    appointments.value.push(newAppointment);
  }

  
  
  </script>
  
  <style>
  </style>
  