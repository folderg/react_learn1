import faker from '@faker-js/faker';


let initialState = {
    chartsData1:{
        salesData:{
            labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                  label: 'Dataset 1',
                  data:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                  borderColor: '#0d6efd',
                  backgroundColor: 'white',
                },
                {
                  label: 'Dataset 2',
                  data:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                  borderColor: '#0d6efd',
                  backgroundColor: 'white',
                },
              ],
        },
        salesGoal: 77,
    },
    chartsData2:{
        salesData:{
            labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                  label: 'Dataset 1',
                  data:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                  borderColor: '#0d6efd',
                  backgroundColor: 'white',
                },
                {
                  label: 'Dataset 2',
                  data:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                  borderColor: '#0d6efd',
                  backgroundColor: 'white',
                },
              ],
        },
    },

};

const chartReducer = (state = initialState, action) => {
    return state;
}

export default chartReducer;