export default {

    display: {
        type: 'object',
        default: {
            label: 'Display type:',
            preffix: '',
            desktop: 'block',
            tablet: 'block',
            mobile: 'block',
            options: [
                {label: 'block', value: 'block'},
                {label: 'inline-block', value: 'inline-block'},
                {label: 'flex', value: 'flex'},
                {label: 'grid', value: 'grid'}
            ]
        }
    },

    gap: {
        type: 'object',
        default: {
            label: 'Gap:',
            preffix: '',
            desktop: '4',   
            tablet: '4',
            mobile: '4',
            options: [
                {label: '2', value: '2'},
                {label: '4', value: '4'},
                {label: '8', value: '8'}
            ]
        }
    },

};
