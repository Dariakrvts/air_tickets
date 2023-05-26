<template>
  <main class="AppNavigationHome">
    <div class="main__container md12">
      <div class="main__navigation md12">
        <va-button  class="btn-way md9"> Туди й назад </va-button>
        <va-button class="btn-way md9"> Односторонній </va-button>
      </div>
      <div class="path">
        <div class="main__waybill1">
        <div>
          <va-select
            v-model="valueWaybill1"
            label=""
            :options="optionsWaybill1"
            multiple
            searchable
            highlight-matched-text
          />
        </div>
      </div>
      <div class="btm-revers">
        <va-button round icon="cached"></va-button>
      </div>
      <div class="main__waybill2">
        <div >
          <va-select
            v-model="valueWaybill2"
            label=""
            :options="optionsWaybill2"
            multiple
            searchable
            highlight-matched-text
          />
        </div>
      </div>
      </div>
      
      <div class="btn__info sm12">
        <div class="date sm12">
          <va-date-input class="sm3 date__input" label="Дата" stateful clearable/>
          <va-date-input class="sm3 date__input" label="Дата" stateful clearable />
          
        </div>
        <div class="price">
          <div>
            <va-select v-model="valueSingle" class="sm12" label="кількість осіб" :options="options" />
          </div>
        </div>
        <div class="scan sm12">
            <va-button size="medium" class="px-6"> пошук рейсів </va-button>
          </div>
      </div>
    </div>    
  </main>
</template>

<script>
export default {
  data() {
    return {
      valueDate: new Date(),
      options: ['Одна', 'Дві', 'Три', 'Чотири', "П'ять", 'Шість'],
      valueSingle: '',
      optionsWaybill1: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      valueWaybill1: '',
      optionsWaybill2: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      valueWaybill2: ''
    }
  },
  name: 'HomeView'
}
</script>

<style>
.AppNavigationHome {
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: #000; */
}

.main__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.main__navigation {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;

}
.btn-way{
  flex: 50%;
  width: 160px;
  gap: 20px;
}
.main__waybill1 {
  margin-bottom: 0;
  margin-top: 20px;
}

.main__waybill2 {
  margin-top: -10px;
}

.path{
  position: relative;
}

.btm-revers{
  position: absolute;
  top: 32px;
  left: 212px;
  z-index: 1; 
}

.btn__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 20px;
}

.date {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
  flex: 100%;
  width: 120px;
  margin-top: 20px;
}
.date__input{
  flex:1 1 50%;
}
.price {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.scan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
width: 100%;
}
.va-button{
  width: 100%;
}
.va-dropdown__content{
  z-index: 99;
}
</style>
