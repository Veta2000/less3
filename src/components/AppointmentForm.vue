<template>
    <form @submit.prevent="submitForm">
      <input
        v-model="appointment.clientName"
        type="text"
        placeholder="Имя клиента"
        required
      />
      <input
        v-model="appointment.carModel"
        type="text"
        placeholder="Модель автомобиля"
        required
      />
      <input
        v-model="appointment.serviceDate"
        type="date"
        required
      />
      
      <label for="serviceType">Тип услуги:</label>
      <select v-model="appointment.serviceType">
        <option value="diagnostics">Диагностика</option>
        <option value="repair">Ремонт</option>
        <option value="maintenance">ТО</option>
      </select>
  
      <div v-if="appointment.serviceType === 'repair'">
        <input
          type="text"
          placeholder="Описание проблемы"
          v-model="appointment.problemDescription"
        />
      </div>
  
      <div v-if="appointment.serviceType === 'maintenance'">
        <input
          type="text"
          placeholder="Дополнительные пожелания"
          v-model="appointment.additionalNotes"
        />
      </div>
      
      <button type="submit">Записаться на СТО</button>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const appointment = reactive({
    clientName: '',
    carModel: '',
    serviceDate: '',
    serviceType: 'diagnostics',
    problemDescription: '',
    additionalNotes: '',
  });
  

  const emit = defineEmits(['submit']);
  
  function submitForm() {
    emit('submit', { ...appointment });
    clearForm();
  }
  
  function clearForm() {
    appointment.clientName = '';
    appointment.carModel = '';
    appointment.serviceDate = '';
    appointment.serviceType = 'diagnostics';
    appointment.problemDescription = '';
    appointment.additionalNotes = '';
  }
  </script>
  