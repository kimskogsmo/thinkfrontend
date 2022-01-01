import { ref, set, get } from 'firebase/database'
import { database } from "../index";

function addRoadmap ({ id, slug, title, resources, children }) {
    const query = ref.child('roadmaps/').orderByChild('slug').equalTo(slug);

    query.on('child_added', (snapshot) => console.log(snapshot.val()));
}