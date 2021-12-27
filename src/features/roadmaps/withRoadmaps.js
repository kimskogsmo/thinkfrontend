import {h,Component} from 'preact';
import {onValue,ref} from "firebase/database";
import {database} from "../../firebase";

const withRoadmaps = (props) => BaseComponent =>
    class extends Component {
        componentDidMount (props) {
            console.log('cdm', props)

            // Get firebase data
            onValue(ref(database,'/roadmaps/'),(snapshot) => {
                if (snapshot && snapshot.exists()) {
                    console.log('onValue', snapshot.val())

                    this.setState({
                        loading: false,
                        roadmaps: snapshot.val()
                    })
                }
            },{
                onlyOnce: true
            });
        }

        render(props, { loading, roadmaps }) {
            return (
                <BaseComponent roadmaps={roadmaps} loading={loading} />
            )
        }
    }

export default withRoadmaps