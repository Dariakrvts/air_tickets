<template>
  <main class="AppNavigationHome">
    <div class="main__container md12">
      <div class="main__navigation md12">
        <va-button class="btn-way md9" :color="flightType === 'roundTrip' ? '#BCDEE0' : '#7EB1B4'"
          @click="handleFlightTypeChange('roundTrip')" @click.stop="handleClickshowFrom()">Туди й назад</va-button>
        <va-button class="btn-way md9" :color="flightType === 'oneWay' ? '#BCDEE0' : '#7EB1B4'"
          @click="handleFlightTypeChange('oneWay')" @click.stop="handleClickshowTo()">Односторонній</va-button>
      </div>

      <div class="path">
        <div class="main__waybillFrom" v-if="waybillFrom">
          <div>
            <va-select v-model="valueFrom" label="" :options="optionsFrom" searchable highlight-matched-text />
          </div>
        </div>
        <div class="btm-revers" v-show="showTo">
          <va-button color="#7EA3A5" round icon="cached" @click="reverseSelection()"></va-button>
        </div>
        <div class="main__waybillTo" v-if="waybillTo">
          <div>
            <va-select v-model="valueTo" label="" :options="optionsTo" searchable highlight-matched-text />
          </div>
        </div>
      </div>

      <div class="btn__info">
        <div class="row justify-space-between">
          <div class="date flex flex-col xs12">
            <va-date-input color="#447275" v-if="showFromDate" class="date__input" label="Дата відправлення"
              v-model="valueDateFrom" stateful clearable :min-date="minDate" :max-date="maxDate" />
          </div>
          <div class="date flex flex-col xs12">
            <va-date-input color="#447275" v-if="showToDate" class="date__input" label="Дата прибуття"
              v-model="valueDateTo" stateful clearable :min-date="minDate" :max-date="maxDate" />
          </div>
        </div>

        <div class="price">
          <va-select color="#447275" v-model="valueSingle" class="sm12" label="кількість осіб" :options="options" />
        </div>
        <div class="scan sm12">
          <va-button color="#447275" size="medium" class="px-6" @click="searchFlights">Пошук рейсів</va-button>
        </div>
        <div class="tabel__tickets" v-if="flightsVisible">
          <table class="va-table va-table--striped  va-table--clickable">
            <thead>
              <tr>
                <th>Звідки</th>
                <th v-if="showToColumn">Куди</th>
                <th>Ціна</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tr v-for="flight in flights" :key="flight.from" class="tr">
              <td>{{ flight.from }}</td>
              <td v-if="showToColumn">{{ flight.to }}</td>
              <td>{{ flight.price }}</td>
              <td>{{ flight.departure }}</td>
            </tr>
          </table>
          <!-- <div class="error">
            <div v-if="valueFrom.length === 0 || valueTo.length === 0" class="error">
              Рейсів не знайдено. Будь ласка вкажіть шлях та дату. -->
          <!-- </div> -->
          <!-- <div v-else class="error"> -->
          <!-- Всі можливі рейси -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import flightsData from '@/data/FlyTickets.json';

export default {
  data() {
    return {
      flightType: 'roundTrip', // Изначальный выбранный тип полета
      valueSingle: 'Один', // Выбранное количество пассажиров
      selectedRow: null,
      optionsFrom: flightsData.map(flight => flight.from), // Опции для выбора пункта отправления
      optionsTo: flightsData.map(flight => flight.to), // Опции для выбора пункта прибытия
      flightsData: [],
      waybillFrom: true, // Показывать блок для выбора пункта отправления
      waybillTo: true, // Показывать блок для выбора пункта прибытия
      flightsVisible: true, // Показывать таблицу с рейсами
      valueFrom: [], // Выбранный пункт отправления
      valueTo: [], // Выбранный пункт прибытия
      valueDateFrom: null, // Выбранная дата отправления
      valueDateTo: null, // Выбранная дата прибытия
      showFromDate: true, // Показывать поле для выбора даты отправления
      showToDate: true, // Показывать поле для выбора даты прибытия
      showTo: true,
      options: ['Одна', 'Дві', 'Три', 'Чотири', "П'ять", 'Шість'], // Опции для выбора количества пассажиров
      flights: [], // Рейсы
      showToColumn: true, // Показывать столбец с пунктом прибытия в таблице
    };
  },
  mounted() {
    this.flights = flightsData; // Загружаем данные о рейсах
  },
  methods: {
    handleClickshowTo() {
      this.showToDate = false; // Скрыть поле для выбора даты прибытия
      this.showToColumn = true; // Скрыть столбец с пунктом прибытия в таблице
      this.valueFrom = []; // Сбросить выбранный пункт отправления
      this.valueTo = []; // Сбросить выбранный пункт прибытия
      this.valueDateTo = null; // Сбросить выбранную дату прибытия
      this.valueDateFrom = null; // Сбросить выбранную дату прибытия
    },
    handleClickshowFrom() {
      this.showToDate = true; // Показать поле для выбора даты прибытия
      this.showToColumn = true; // Показать столбец с пунктом прибытия в таблице
      this.valueDateTo = null; // Сбросить выбранную дату прибытия
    },
    handleFlightTypeChange(type) {
      // Очистить значения селектов и даты
      this.selectedFrom = '';
      this.selectedTo = '';
      this.selectedDate = null;
      this.flightType = type;
    },
    reverseSelection() {
      [this.valueFrom, this.valueTo] = [this.valueTo, this.valueFrom]; // Поменять выбранные пункты отправления и прибытия местами
    },
    searchFlights() {
      this.flightsVisible = true; // Показать таблицу с рейсами
      this.flights = flightsData.filter(flight => {
        return (
          this.matchesSelectedDate(flight.departure) // Фильтрация по выбранной дате отправления
        );
      });
    },
    matchesSelectedDate(flightDeparture) {
      if (!this.valueDateFrom && !this.valueDateTo) {
        return true; // Если дата не выбрана, показываем все рейсы
      }
      // const twoFlyTickets = this.flights.filter(flight => flight.type === 'two-way');
      const selectedDateFrom = this.valueDateFrom ? new Date(this.valueDateFrom) : null; // Преобразуем выбранную дату отправления в объект Date
      const selectedDateTo = this.valueDateTo ? new Date(this.valueDateTo) : null; // Преобразуем выбранную дату прибытия в объект Date
      const flightDate = new Date(flightDeparture); // Преобразуем дату отправления рейса в объект Date

      if (selectedDateFrom && selectedDateTo) {
        // Если выбраны обе даты
        return flightDate >= selectedDateFrom && flightDate <= selectedDateTo;
      } else if (selectedDateFrom) {
        // Если выбрана только дата отправления
        return flightDate >= selectedDateFrom;
      } else if (selectedDateTo) {
        // Если выбрана только дата прибытия
        return flightDate <= selectedDateTo;
      }
      return true;
    },
    formatDate(date) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' }; // Опции форматирования даты
      return new Intl.DateTimeFormat('en-US', options).format(new Date(date)); // Форматирование даты в формат "день.месяц.год"
    },
  },
  name: 'HomeView' // Название компонента
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.AppNavigationHome {
  --va-font-family: 'Roboto', sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: #d1ffffcd; */
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

.btn-way {
  flex: 50%;
  width: 160px;
  gap: 20px;
}

.main__waybillFrom {
  margin-bottom: 0;
  margin-top: 20px;
}

.main__waybillTo {
  margin-top: -8px;
}

.path {
  position: relative;
}

.btm-revers {
  position: absolute;
  top: 34px;
  left: 208px;
  z-index: 99;
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

.date__input {
  flex: 1 1 50%;
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

.va-button {
  width: 100%;
}

.va-dropdown__content {
  z-index: 99;
}

.tabel__tickets {
  box-shadow: 0px 4px 6px rgba(62, 94, 84, 0.7);
  overflow: auto;
}
</style>
