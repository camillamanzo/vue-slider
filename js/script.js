let app = new Vue(
{
    el: "#app",
    data: {
        images: [
            {
                source: "./img/albert-einstein.webp",
                alt: "img-Albert-Einstein",
                name: "Albert Einstein",
                nobel: "The Nobel Prize in Physics 1921 was awarded to Albert Einstein \"for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect.\" Albert Einstein received his Nobel Prize one year later, in 1922."
            },
            {
                source: "./img/Brian-Schmidt.jpg",
                alt: "img-Brian-Schmidt",
                name: "Brian Schmidt",
                nobel: "The Nobel Prize in Physics 2011 was awarded to Brian Schmidt \"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae.\""
            },
            {
                source: "./img/Charles-Kuen-Kao .jpg",
                alt: "img-Charles-Kuen-Kao",
                name: "Charles Kuen Kao",
                nobel: "The Nobel Prize in Physics 2009 was awarded to Charles Kuen Kao \"for groundbreaking achievements concerning the transmission of light in fibers for optical communication.\""

            },
            {
                source: "./img/Emmanuelle-Charpentier.webp",
                alt: "img-Emmanuelle-Charpentier",
                name: "Emmanuelle Charpentier",
                nobel: "The Nobel Prize in Physics 2020 was awarded to Emmanuelle Charpentier \"for the development of a method for genome editing.\""

            },
            {
                source: "./img/rita-montalcini.jpg",
                alt: "img-rita-montalcini",
                name: "Rita Levi-Montalcini",
                nobel: "The Nobel Prize in Medicine 1986 was awarded to Rita Levi-Montalcini \"for their discoveries of growth factors.\""
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