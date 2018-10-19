var PageArticleDetail = {
    template: `
        <div v-if="importObject.status">
            
        </div>
    `,
    data() {
        return {
            importObject: {
                status: false,
                data: [
                    ''
                ]
            },
        }
    },
    created() {
        document.title = '文章 - ' + this.$route.params.id;
        this.$root.$emit('menu-current', 'article');
    }
};