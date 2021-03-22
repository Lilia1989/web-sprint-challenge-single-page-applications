import * as yup from 'yup'
const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out.')
        .min(3, 'Name must be 3 characters long'),
    specialInstructions: yup.string()
        .trim(),
   // Checkboxes are required
   peperoni: yup.boolean().oneOf([false],'Must choose at least 4'),
   sausage: yup.boolean().oneOf([false],'Must choose at least 4'),
   canadianBacon: yup.boolean().oneOf([false],'Must choose at least 4'),
   spycyItalianSausage: yup.boolean().oneOf([false],'Must choose at least 4'),
   griledChicken: yup.boolean().oneOf([false],'Must choose at least 4'),
   onion: yup.boolean().oneOf([false],'Must choose at least 4'),
   greenPaper: yup.boolean().oneOf([false],'Must choose at least 4'),
   dicedTomato: yup.boolean().oneOf([false],'Must choose at least 4'),
   blackOlives: yup.boolean().oneOf([false],'Must choose at least 4'),
   raostedGarlic: yup.boolean().oneOf([false],'Must choose at least 4'),
   arthichokeHearts: yup.boolean().oneOf([false],'Must choose at least 4'),
   pineapple: yup.boolean().oneOf([false],'Must choose at least 4'),
   threeCheese: yup.boolean().oneOf([false],'Must choose at least 4'),
   extraCheese: yup.boolean().oneOf([false],'Must choose at least 4'),
   //for radios and dropdowns
   choiceOfSize: yup.string()
    .oneOf(['small', 'medium', 'large', 'extra-larg'], 'choiceOfSize is required'),
    choiceOfSauce: yup.string()
        .oneOf(['originalRed', 'garlicRanch','BBQSauce','spinachAlfredo'], 'choiceOfSauce status is required'),
})
export default formSchema