const roadmaps = [
    {
        id: 1,
        roadmapMappingId: 123,
        title: 'Software Engineering',
    },
    {
        id: 2,
        title: 'Web Development',
    },
    {
        id: 3,
        title: 'Backend Development',
    }
]

const roadmapMappingTable = [
    {
        id: 123,
        settings: {
            sections: [
                {
                    name: 'HTML',
                    priority: 1,
                }
            ]
        }
    }
]

const kim = {
    id: 1,
    displayName: 'Kimpa',
    title: 'JS-consultant',
    roadmaps: [1,2]
}

const adde = {
    id: 2,
    displayName: 'Adde',
    title: 'Dev in training',
    roadmaps: [1,2]
}

const users = [
    kim,
    adde
]

export const getUser = (id) => {
    return users.find(x => x.id === id)
}

export const getUserRoadmaps = (user) => {
    const userRoadmaps = roadmaps.filter(x => user.roadmaps(r => r.id === x.id))
}


