import { createSlice } from '@reduxjs/toolkit';

const storedData = JSON.parse(localStorage.getItem('PersonalInformation'));

const defaultData = {
  "firstName": "نام",
  "lastName": "نام خانوادگی",
  "phoneNumber": "09123456789",
  "nationalCode": "1234567890",
  "geneder": "جنسیت",
  "province": {
    "label": "استان"
  },
  "city": {
    "label": "شهر "
  },
  "categories": [
    {
      "label": "دسته بندی ها"
    }
  ],
  "interests": [
    {
      "label": "علاقه مندی ها"
    }
  ],
  "ck": "<p>عتغافلقربزیسطیزبرلفقفاغعتزبرلاذتنمکجمحنخاعتغلب</p>"
}



const counterSlice = createSlice({
  name: 'job_seeker',
  initialState: {
    PersonalInformation: storedData ? storedData : defaultData
  },
  reducers: {
    setInformation: (state, action) => {
      state.PersonalInformation = action.payload;
      localStorage.setItem('PersonalInformation', JSON.stringify(action.payload));
      console.log(state.PersonalInformation)
    },
  }
});

export const { setInformation } = counterSlice.actions;

export default counterSlice.reducer;
