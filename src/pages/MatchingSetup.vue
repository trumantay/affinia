<script setup>
import { useRouter } from "vue-router"
import { useAffiniaStore } from "../stores/affiniaStore"

const router = useRouter()
const store = useAffiniaStore()

const purposes = [
  "study",
  "networking",
  "friendship",
  "entrepreneurship"
]

function goBack() {
  router.push("/profile")
}

function goNext() {
  router.push("/matches")
}
</script>

<template>
  <div class="setup">
    <h1> Matching Setup </h1>
    <p class="intro">
        Configure how Affinia should find people for you right now. <br>
        Your purpose, priorities, and requirements are used to generate
        compatibility-based recommendations.
    </p>

    <div class="section">
      <h2> Purpose </h2>

      <select v-model="store.currentPurpose">
        <option v-for="purpose in purposes" :key="purpose" :value="purpose"> {{ purpose }} </option>
      </select>
    </div>

    <div class="section">
      <h2> Priority </h2>
      <p class="section-description">
        Tell Affinia which factors should have the greatest influence when ranking potential matches.
      </p>

      <p> Location importance: {{ store.userWeights.location }} </p>
      <input type="range" min="0" max="5" v-model.number="store.userWeights.location" />

      <p> Shared interests importance: {{ store.userWeights.interests }} </p>
      <input type="range" min="0" max="5" v-model.number="store.userWeights.interests" />

      <p> Personality compatibility importance: {{ store.userWeights.personality }} </p>
      <input type="range" min="0" max="5" v-model.number="store.userWeights.personality" />

      <p> Shared goals importance: {{ store.userWeights.goals }} </p>
      <input type="range" min="0" max="5" v-model.number="store.userWeights.goals" />
    </div>

    <div class="section">
      <h2> Requirements </h2>
      <p class="section-description">
        These are the conditions that candidates must satisfy before Affinia considers them as potential matches.
      </p>

      <label><input type="checkbox" v-model="store.filters.sameLocation" /> Require same location </label>

      <label><input type="checkbox" v-model="store.filters.sharedInterests" /> Require shared interests </label>

      <label><input type="checkbox" v-model="store.filters.sharedGoals" /> Require shared goals </label>

      <p> Minimum compatibility required: {{ store.filters.minimumCompatibility }}% </p>

      <input type="range" min="0" max="100" step="5" v-model.number="store.filters.minimumCompatibility" />
    </div>

    <div class="section info-card">

        <h2> How compatibility is calculated </h2>

        <p class="section-description">
            Affinia aggregates four factors to generate a compatibility score. <br>
            Your priority sliders increase or decrease the influence of each
            factor when ranking matches. <br><br>
            For example,
        </p>

        <div class="weights">

            <div class="weight-row">
                <span> Location: </span>
                <strong> 40% </strong>
            </div>

            <div class="weight-row">
                <span> Shared interests: </span>
                <strong> 25% </strong>
            </div>

            <div class="weight-row">
                <span> Personality compatibility: </span>
                <strong> 20% </strong>
            </div>

            <div class="weight-row">
                <span> Shared goals: </span>
                <strong> 15% </strong>
            </div>

        </div>

        <p class="note">
            These values are adjusted automatically based on the priorities
            you selected above.
        </p>

    </div>

    <div class="actions">
      <button class="secondary" @click="goBack"> Previous </button>
      <button @click="goNext"> Find Matches </button>
    </div>
  </div>
</template>

<style scoped>
.setup {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.section {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  background: #fafafa;
}

select {
  padding: 10px;
  width: 100%;
  margin-top: 8px;
}

label {
  display: block;
  margin: 12px 0;
}

.actions {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 12px 18px;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.secondary {
  background: #6b7280;
}

.intro {
    color: #4b5563;
    margin-bottom: 28px;
    line-height: 1.6;
}

.section-description {
    color: #6b7280;
    margin-bottom: 16px;
    line-height: 1.5;
}

.info-card {
    background: #f8fafc;
}

.weights {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 16px 0;
}

.weight-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.note {
    color: #6b7280;
    font-size: 14px;
    margin-top: 16px;
}
</style>