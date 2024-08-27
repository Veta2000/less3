<template>
    <div class="card">
      <h3>{{ appointment.clientName }}</h3>
      <p>{{ appointment.carModel }} - {{ appointment.serviceDate }}</p>
      <p>Тип услуги: {{ appointment.serviceType }}</p>
      <p v-if="appointment.serviceType === 'repair'">Описание проблемы: {{ appointment.problemDescription }}</p>
      <p v-if="appointment.serviceType === 'maintenance'">Пожелания: {{ appointment.additionalNotes }}</p>
    </div>
  </template>
  
  <script setup>
defineProps({
  appointment: Object,
});
  </script>
  