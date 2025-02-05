export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields:[
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name',
            validation: (Rule) => Rule.required().max(100).error('Product name is required')
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: (Rule) => Rule.required().max(100).error('Product name is required'),
            options: {
                source: 'productName',
                maxLength: 200,
            },
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: (Rule) => Rule.required().max(100).error('Description is required')
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: (Rule) => Rule.required().max(100).error('Price is required')
        },
        {
            name: 'discountedprice',
            type: 'number',
            title: 'Discounted Price',
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity',
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [ { type: 'string' } ],
            options:{
                layout:'tags',
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            description: 'high quality images',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required()
        }
    ]
}