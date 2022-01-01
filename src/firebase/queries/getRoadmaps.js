import { ref, query, limitToLast } from 'firebase/database'
import { database } from '../index'


export default function getRoadmaps () {
    return query(ref(database, 'roadmaps'), limitToLast(25));
}