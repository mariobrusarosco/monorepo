// Solution: O(n log n)
// Sorting the array and then getting the correct position
const sortAndFind = (arr: number[], n: number) => {
  const sorted = arr.sort((a, b) => a - b);

  return sorted[n - 1];
};

const findKTHNumber = (arr: number[], n: number) => {
  // const solution = sortAndFind(arr, n);
  const solution = findWithQuickSort(arr, n);

  return solution;
};

// Solution: O(log n)
//
const partition = (arr: number[], low: number, high: number) => {
  const pivot = arr[low];
  let swap = low;

  for (let i = low + 1; i <= high; i++) {
    if (arr[i] <= pivot) {
      swap++;
      [arr[swap], arr[i]] = [arr[i], arr[swap]];
    }
  }

  [arr[swap], arr[low]] = [arr[low], arr[swap]];

  return swap;
};

const findKthSmallest = (
  arr: number[],
  low: number,
  end: number,
  n: number
) => {
  const condOne = n > 0;
  const condTwo = n <= end - low + 1;
  const pi = partition(arr, low, end);

  console.log({ pi });

  return pi;
};
const findWithQuickSort = (arr: number[], n: number) => {
  if (arr.length < n) return Number.MIN_SAFE_INTEGER;

  return findKthSmallest(arr, 0, arr.length - 1, n);
};

const QuickSort = () => {
  // console.log(findWithQuickSort([99, 50, 90, 8, 7, 21, 14], 3));

  return (
    <>
      <h1>QuickSort</h1>
      <p>lorem asd</p>
    </>
  );
};

const uniqueArray = (arr: number[]) => {
  const duplicated = new Set();
  const uniques = [];

  for (let item of arr) {
    if (!duplicated.has(item)) {
      uniques.push(item);
      duplicated.add(item);
    }
  }

  return uniques;
};

const selectionSort = (arr: number[]) => {
  const inner = (arr: number[], start: number) => {
    if (start >= arr.length) return arr;

    let lowestFound = { i: start, val: arr[start] };

    for (let i = start + 1; i < arr.length; i++) {
      if (lowestFound.val >= arr[i]) lowestFound = { i, val: arr[i] };
    }

    [arr[start], arr[lowestFound.i]] = [arr[lowestFound.i], arr[start]];

    return inner(arr, start + 1);
  };

  return inner(arr, 0);
};

const partitionOne = (arr: number[], low: number, high: number) => {
  const pivot = arr[high];
  let i = low - 1;
  console.log(`arr: ${arr}`);

  for (let j = low; j < high; j++) {
    console.log(
      `pivot is ${pivot}, low is ${low}, high is ${high} and, the swap index is ${i}`
    );
    console.log(`element ${arr[j]} at ${j}`);

    if (arr[j] < pivot) {
      i++;
      console.log(
        `element ${arr[j]} less than pivot: ${pivot}. Placing it at ${i}`
      );
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Throwing to the left, but not as far as possible, Noooo! I have to consider
    }
  }

  console.log(`placing pivot ${arr[high]} right next ${i}, at ${i + 1}`);

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
};

const quickSort = (arr: number[], start: number, end: number) => {
  if (start < end) {
    const pi = partitionOne(arr, start, end);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }

  // console.log('pi:', pi, arr, '----so it is the number:', arr[pi]);

  // const pi2 = partitionOne(arr, 0, pi - 1);

  // console.log('pi2:', pi2, arr, '----so it is the number:', arr[pi2]);

  // const pi3 = partitionOne(arr, pi + 1, arr.length - 1);

  // console.log('pi3:', pi3, arr, '----so it is the number:', arr[pi3]);

  // const pi4 = partitionOne(arr, 0, pi2 - 1);

  // console.log('pi4:', pi4, arr, '----so it is the number:', arr[pi4]);

  // const pi5 = partitionOne(arr, pi3 + 1, arr.length - 1);

  // console.log('pi5:', pi5, arr, '----so it is the number:', arr[pi5]);

  // const pi3 = partitionOne(arr, 0, pi2 - 1);
  // console.log('pi3', pi3, arr);

  // const pi4 = partitionOne(arr, pi, arr.length - 1);
  // console.log('pi4:', pi4, arr);

  // const pi5 = partitionOne(arr, pi4 + 1, arr.length - 1);
  // console.log('pi5', pi5, arr);

  // const pi6 = partitionOne(arr, pi5 + 1, arr.length - 1);
  // console.log('pi6', pi6, arr);
};

const areDisjoint = (arr1: number[], arr2: number[]) => {
  const set = new Set(arr1);
  return !arr2.some((item) => set.has(item));
};

const areBracketsBalanced = (s: string) => {
  const stack = [];
  const brackets = { '{': '}', '(': ')' };

  for (let char of s) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  console.log(stack);

  return stack.length === 0;
};

const merge = (left: number[], right: number[]) => {
  const results = [];
  let lIndex = 0,
    rIndex = 0;

  while (lIndex < left.length && rIndex < right.length) {
    if (left[lIndex] < right[rIndex]) {
      results.push(left[lIndex]);
      lIndex++;
    } else {
      results.push(right[rIndex]);
      rIndex++;
    }
  }

  return results.concat(left.slice(lIndex)).concat(right.slice(rIndex));
};

const sort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  return merge(sort(leftHalf), sort(rightHalf));
};

const objOne = {
  first_name: 'Mario',
  age: 30,
  credits: 45,
  address: {
    number: 10,
    street: 'Elmo',
    state: 'SP',
  },
  exclusive_1: 'sure',
  exclusive_2: null,
};

const objTwo = {
  first_name: 'Luigi',
  credits: 10,
  address: {
    city: null,
    number: 8,
    street: 'ieta',
    inner: {
      lorem: null,
      ipsum: true,
    },
  },
  age: 40,
  nick: 'Big M',
  last_name: 'Brusa',
};

// const countCredits = (user: any) => {
//   const isArray = (data: any) => Array.isArray(data);
//   const isObject = (data: any) => data instanceof Object && !isArray(data);
//   let credits = 0;

//   function inner(value) {
//     if (!!value && !isObject(value)) {
//       credits++;
//     }

//     if (isObject(value)) {
//       return Object.values(value).forEach((i) => inner(i));
//     }
//   }

//   Object.values(user).forEach((prop) => inner(prop));

//   return credits;
// };

// Fake data
const DOC_1 = {
  id: 100,
  name: 'Jesse Pinkman',
  specialty: 'Anxiety',
  clinicId: 1,
  isActive: true,
};

const DOC_2 = {
  id: 200,
  name: 'Walter',
  specialty: 'Depression',
  clinicId: 2,
  isActive: true,
};

const DOC_3 = {
  id: 300,
  name: 'Mario',
  specialty: 'Pipes',
  clinicId: 1,
  isActive: false,
};

const CLINIC_1 = {
  id: 1,
  name: 'Centre of Anx',
};

const PATIENT_1 = {
  id: 1,
  name: 'Scarlet',
  doctorId: 100,
};

const PATIENT_2 = {
  id: 2,
  name: 'Mike',
  doctorId: 200,
};

const getDoctorsByClinic = (clinicId: number) => {
  return fakeData().doctors.filter((doc) => doc.clinicId === clinicId);
};
const getPatientsByClinic = (clinicId: number) => {
  const doctors = getDoctorsByClinic(clinicId);
  const doctorIds = new Set(doctors.map((doc) => doc.id)); // O(m)

  return fakeData().patients.filter(
    (patient) => doctorIds.has(patient.doctorId) // O(1)
  );
};

const fakeData = () => {
  return {
    doctors: [DOC_1, DOC_2, DOC_3],
    patients: [PATIENT_1, PATIENT_2],
    clinics: [CLINIC_1],
  };
};

const getPatientsWithNoActiveDoc = () => {
  const activeDocIds = fakeData()
    .doctors.filter((doc) => doc.isActive)
    .map((doc) => doc.id);
  return fakeData().patients.filter(
    (patient) => !activeDocIds.includes(patient.doctorId)
  );
};

// SearchBar

// Results

const isArray = (data: any) => Array.isArray(data);
const isObject = (data: any) => data instanceof Object && !isArray(data);

const countCredits = (user: any) => {
  let credits = 0;

  Object.values(user).forEach((prop) => {
    if (!prop) return;

    if (isObject(prop)) {
      credits += countCredits(prop);
    } else {
      credits++;
    }
  });

  return credits;
};

// const mergeUserData = (objOne: any, objTwo: any) => {
//   const mergeResult = {};

//   Object.keys(objOne).forEach((prop) => {
//     const validFirstKey = objOne?.hasOwnProperty(prop) && objOne[prop] !== null;
//     const validSecondKey =
//       objTwo?.hasOwnProperty(prop) && objTwo[prop] !== null;

//     if (validSecondKey) {
//       if (isObject(objOne[prop]) && isObject(objTwo[prop])) {
//         mergeResult[prop] = mergeUserData(objOne[prop], objTwo[prop]);
//       } else {
//         mergeResult[prop] = objTwo[prop];
//       }
//     } else {
//       if (validFirstKey) mergeResult[prop] = objOne[prop];
//     }
//   });

//   objTwo &&
//     Object.keys(objTwo).forEach((prop) => {
//       const validSecondKey =
//         objTwo.hasOwnProperty(prop) && objTwo[prop] !== null;

//       if (validSecondKey) {
//         if (isObject(objTwo[prop])) {
//           mergeResult = mergeUserData(objTwo[prop]);
//         } else {
//           mergeResult[prop] = objTwo[prop];
//         }
//       }
//     });

//   return mergeResult;
// };

const deepFalsyRemoval = (obj: any) => {};

const mergeUserData = (objOne: any, objTwo: any) => {
  const result = {};
  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);

  const oldUserProps = new Set(objOneKeys).difference(new Set(objTwoKeys));
  const newUserProps = new Set(objTwoKeys).difference(new Set(objOneKeys));
  const commonProps = new Set(objOneKeys).intersection(new Set(objTwoKeys));

  for (let prop of commonProps) {
    result[prop] =
      isObject(objOne[prop]) && isObject(objTwo[prop])
        ? mergeUserData(objOne[prop], objTwo[prop])
        : (result[prop] = objTwo[prop]);
  }

  for (let prop of oldUserProps) {
    if (objOne[prop]) result[prop] = objOne[prop];
  }

  for (let prop of newUserProps) {
    if (objTwo[prop]) result[prop] = objTwo[prop];
  }

  return result;
};
const mergeUserDataNew = (objOne: any, objTwo: any) => {};

const Lodash = {
  get: (objectParam, pathParam, defaultValue) => {
    const paths = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

    let index = 0;
    let propValue = objectParam;
    const length = paths.length;

    while (index < length && !!propValue) {
      propValue = propValue[String(paths[index])];

      index++;
    }

    const hasValidValue = propValue !== undefined;
    const hasReachedFinalPath = index && index === length;

    return hasReachedFinalPath && hasValidValue ? propValue : defaultValue;
  },
};

export function TrainingScreen() {
  return (
    <section data-ui="training-page">
      <QuickSort />
    </section>
  );
}
