$.ajax({
    url: "data/data.json",
    success: function(data) {
        render(data.list);
    }
})

function render(arr) {
    var html = '';
    arr.map(function(v, i) {
        html += `<div class='picolist'>
                <dl>
                    <dt>
                        <img src="${v.img}" alt="">
                    </dt>
                    <dd>
                        <h2>${v.title}</h2>
                        <h3>${v.h2}</h3>
                        <h4>
                            <p>
                                <span><b>${v.price}</b>元</span>
                                <span>${v.yuanjia}</span>
                            </p>
                            <p>已售<em>${v.yishou}</em></p>
                        </h4>
                    </dd>
                </dl>
            </div>`;
    })
    $('.piclist').append(html);
}