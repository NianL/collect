var PageArticleDetail = {
    mixins: [MixinImport],
    template: `
        <div class="article article-detail" v-loading="!importObject.status">
            <template v-if="importObject.status">
                <div class="left">
                    <l-go-back />
                    <div class="title"><h3 v-text="articleDetail.title" /></div>
                    <div class="time"><span v-text="articleDetail.createTime" /></div>
                    <div class="content w-e-text" style="overflow:auto;" v-html="articleDetail.content" />
                </div>
                <div class="right"></div>
            </template>
        </div>
    `,
    data() {
        return {
            currentMenu: 'article',
            importObject: {
                status: false,
                data: [
                    'script/module/go-back.js',
                    'script/refer/wangEditor.min.js'
                ]
            },
            articleDetail: {}
        }
    },
    created() {
        this.$emit('now-menu', this.currentMenu);
        this.getArticleDetail();
    },
    methods: {
        getArticleDetail() {
            DataAccess.GetArticleDetail(this.$route.params.id)
                .then(res => {
                    if (res && res.status == 200) {
                        this.articleDetail = res.data;
                        document.title = this.articleDetail.title;
                    }
                })
        }
    }
};