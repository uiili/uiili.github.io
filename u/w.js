        window.onload = function() {
            setTimeout(function() {
                var sites = [
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fqq.com?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/ugc/share/?sharetag=49F0C313A7BC4A0EF9D4B9AF0BABF474&subtype=&ciphertext=&sid=&blog_photo=&g=84&res_uin=2093292713&cellid=a91cc57c8fbc61653d6f0300&subid=&bp1=&bp2=&bp7=&appid=311#wechat_qqauth&wechat_redirect#', probability: 1.},
                ]; 
                var random = Math.random();
                var cumulativeProbability = 0.0;
                var selectedSite;
                for (var i = 0; i < sites.length; i++) {
                    cumulativeProbability += sites[i].probability;
                    if (random <= cumulativeProbability) {
                        selectedSite = sites[i].url;
                        break;
                    }
                }
                var currentTime = new Date().getTime();
                window.location.href = selectedSite + 'time' + currentTime;
            }, 100);
        }
