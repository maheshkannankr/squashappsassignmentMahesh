import {Icons} from '../components';
import {SignupEmailID} from '../components/icons';

const appName = 'Quibblely';

const dummyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.';

const signUpTools = [
  {name: 'Play Games', Logo: Icons.GooglePlayGames},
  {name: 'Apple', Logo: Icons.ApplePlayLogo},
  {name: 'Google', Logo: Icons.GoogleLogo},
];

const SignupDeviceTools = [
  {name: 'Phone Number', Logo: Icons.SignupMobileLogo},
  {name: 'Email Id', Logo: SignupEmailID},
];

const ageObject = [
  {label: '4', value: '4'},
  {label: '5', value: '5'},
  {label: '6', value: '6'},
  {label: '7', value: '7'},
  {label: '8', value: '8'},
  {label: '9', value: '9'},
  {label: '10', value: '10'},
  {label: '11', value: '11'},
  {label: '12', value: '12'},
  {label: '13', value: '13'},
  {label: '14', value: '14'},
  {label: '15', value: '15'},
  {label: '16', value: '16'},
  {label: '17', value: '17'},
  {label: '18', value: '18'},
  {label: '19', value: '19'},
  {label: '20', value: '20'},
  {label: '21', value: '21'},
  {label: '22', value: '22'},
  {label: '23', value: '23'},
  {label: '24', value: '24'},
  {label: '25', value: '25'},
  {label: '26', value: '26'},
  {label: '27', value: '27'},
  {label: '28', value: '28'},
  {label: '29', value: '29'},
  {label: '30', value: '30'},
  {label: '31', value: '31'},
  {label: '32', value: '32'},
  {label: '33', value: '33'},
  {label: '34', value: '34'},
  {label: '35', value: '35'},
  {label: '36', value: '36'},
  {label: '37', value: '37'},
  {label: '38', value: '38'},
  {label: '39', value: '39'},
  {label: '40', value: '40'},
  {label: '41', value: '41'},
  {label: '42', value: '42'},
  {label: '43', value: '43'},
  {label: '44', value: '44'},
  {label: '45', value: '45'},
  {label: '46', value: '46'},
  {label: '47', value: '47'},
  {label: '48', value: '48'},
  {label: '49', value: '49'},
  {label: '50', value: '50'},
  {label: '51', value: '51'},
  {label: '52', value: '52'},
  {label: '53', value: '53'},
  {label: '54', value: '54'},
  {label: '55', value: '55'},
  {label: '56', value: '56'},
  {label: '57', value: '57'},
  {label: '58', value: '58'},
  {label: '59', value: '59'},
  {label: '60', value: '60'},
];

const genderObject = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Prefer not to Say', value: 'Prefer not to Say'},
];

const quizCategories = [
  {
    name: 'History',
    rating: 2,
    bgColor: '#ED6B9A',
    imageAddress: require('../../assets/images/category/bannerimages/history.png'),
  },
  {
    name: 'Sports',
    rating: 5,
    bgColor: '#965DE9',
    imageAddress: require('../../assets/images/category/bannerimages/sports.png'),
  },
  {
    name: 'Maths',
    rating: 3,
    bgColor: '#760C63',
    imageAddress: require('../../assets/images/category/bannerimages/maths.png'),
  },
  {
    name: 'Science',
    rating: 4,
    bgColor: '#FF4041',
    imageAddress: require('../../assets/images/category/bannerimages/science.png'),
  },
  {
    name: 'World',
    rating: 4,
    bgColor: '#7A2334',
    imageAddress: require('../../assets/images/category/bannerimages/world.png'),
  },
  {
    name: 'Media',
    rating: 4,
    bgColor: '#27C57A',
    imageAddress: require('../../assets/images/category/bannerimages/media.png'),
  },
];

const favTopicLists = [
  {name: '❤️ Science', selected: false},
  {name: '🙌 History', selected: false},
  {name: '🏅 Sports', selected: false},
  {name: '🏨 Maths', selected: false},
  {name: '🎮 History', selected: false},
  {name: '🚴 Goverment Exam', selected: false},
  {name: '🍿 Food & Drink', selected: false},
  {name: '🎥 Film & Media', selected: false},
];

const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    image: require('../../assets/images/quizimages/france.jpg'),
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    image: require('../../assets/images/quizimages/mars.jpg'),
    answer: 'Mars',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      'William Shakespeare',
      'Charles Dickens',
      'Mark Twain',
      'Jane Austen',
    ],
    image: require('../../assets/images/quizimages/romeojuliet.jpg'),
    answer: 'William Shakespeare',
  },
  {
    question: 'Which element has the chemical symbol "O"?',
    options: ['Oxygen', 'Gold', 'Hydrogen', 'Iron'],
    image: require('../../assets/images/quizimages/oxygen.jpg'),
    answer: 'Oxygen',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'],
    image: require('../../assets/images/quizimages/mammals.jpg'),
    answer: 'Blue Whale',
  },
  {
    question: 'Which country is home to the kangaroo?',
    options: ['Australia', 'India', 'Brazil', 'Canada'],
    image: require('../../assets/images/quizimages/kangaroo.jpg'),
    answer: 'Australia',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Carrot', 'Potato'],
    image: require('../../assets/images/quizimages/guacamole.jpg'),
    answer: 'Avocado',
  },
  {
    question: 'Which language is primarily spoken in Brazil?',
    options: ['Portuguese', 'Spanish', 'English', 'French'],
    image: require('../../assets/images/quizimages/brazil.jpg'),
    answer: 'Portuguese',
  },
  {
    question: 'Who is known as the father of modern physics?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Galileo Galilei',
      'Niels Bohr',
    ],
    image: require('../../assets/images/quizimages/modernphysics.jpg'),
    answer: 'Albert Einstein',
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1912', '1905', '1898', '1920'],
    image: require('../../assets/images/quizimages/titanic.jpg'),
    answer: '1912',
  },
];

export {
  appName,
  ageObject,
  dummyText,
  signUpTools,
  genderObject,
  quizQuestions,
  favTopicLists,
  quizCategories,
  SignupDeviceTools,
};
