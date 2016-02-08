export interface IPost{
    name?: string,
    desc?: string
}
export function Post(domainBuilder){
    var schema = domainBuilder
    .i('Post')
    .withBasis()
    .withCreatedOn()
    .withProperties({
        user:         {type: String, ref: 'User', required: true},
        content:      {type: String, required: true},
        comments:     [
            {
                id: String, 
                ref: 'Comments',
                required: true
            }
        ],
        desc:         {type: String}
    })
    .build();
    return schema.model(true);
}