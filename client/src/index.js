import './css/style.css';
// import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';

new Modal();
const ideaForm = new IdeaForm();
new IdeaList();

ideaForm.render();
