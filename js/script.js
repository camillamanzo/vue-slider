let app = new Vue(
{
    el: "#app",
    data: {
        images: [
            {
                source: "./img/albert-einstein.webp",
                alt: "img-Albert-Einstein",
                name: "Albert Einstein" 
            },
            {
                source: "./img/Brian-Schmidt.jpg",
                alt: "img-Brian-Schmidt",
                name: "Brian Schmidt" 
            },
            {
                source: "./img/Charles-Kuen-Kao .jpg",
                alt: "img-Charles-Kuen-Kao",
                name: "Charles Kuen Kao" 
            },
            {
                source: "./img/Emmanuelle-Charpentier.webp",
                alt: "img-Emmanuelle-Charpentier",
                name: "Emmanuelle Charpentier" 
            },
            {
                source: "./img/jennifer-doudna.jpg",
                alt: "img-jennifer-doudna",
                name: "Jennifer Doudna" 
            }
        ],
        imageIndex: 0,
    },
    methods: {
        previousImage: function(){
            this.imageIndex--;
            console.log(this.imageIndex);
            if(this.imageIndex < 0){
                this.imageIndex = this.images.length - 1;
            }

        },

        nextImage: function(){
            this.imageIndex++;
            console.log(this.imageIndex);
            if(this.imageIndex == this.images.length){
                this.imageIndex = 0;
            }
        }
    }
});