const Product = require('./model/product')

class SampleDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'ああああああ　ああああああ　ああああああ　ああああああ',
                headingtext2: 'いいいいいい　いいいいいい　いいいいいい　いいいいいい',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'ああああああ　ああああああ　ああああああ　ああああああ',
                headingtext2: 'いいいいいい　いいいいいい　いいいいいい　いいいいいい',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'ああああああ　ああああああ　ああああああ　ああああああ',
                headingtext2: 'いいいいいい　いいいいいい　いいいいいい　いいいいいい',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Spetial',
                price: 999,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'ああああああ　ああああああ　ああああああ　ああああああ',
                headingtext2: 'いいいいいい　いいいいいい　いいいいいい　いいいいいい',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            }
        ]
    }

    // Productモデルの初期化を実行
    async initDb() {
        await this.cleanDb() // 最初に元々入っているデータを消す
        this.pushProductsToDb() //その後追加
    }

    // awaitを使う関数にはasyncをつける
    async cleanDb() {
        //awaitをつけることで、その命令が終わった後に次の関数が走るようになる
        await Product.deleteMany({}) //deleteManyに何も渡さず実行すると、Productの中のデータが一式削除される
    }


    pushProductsToDb() {
        this.products.forEach(
           (product) => {
               const newProduct = new Product(product) //この new productはserver/model/product.jsないで作ったモデル
               newProduct.save()
           }
        )
    }


    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = SampleDb