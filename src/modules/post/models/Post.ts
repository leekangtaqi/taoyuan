export interface IPost{
    name?: string,
    desc?: string
}
export function Post(domainBuilder){
    var schema = domainBuilder
    .i('Post')
    .withProperties({
        initiator:         {type: String, ref: 'User', required: true},
        content:      {type: String, required: true},
        title:        {type: String, required: true},
        crtOn:        {type: Number, default: (new Date()).getTime()},
        // comments:     [
        //     {
        //         id: String, 
        //         ref: 'Comments',
        //         required: true
        //     }
        // ],
        desc:         {type: String}
    })
    .build();
    return schema.model(true);
}