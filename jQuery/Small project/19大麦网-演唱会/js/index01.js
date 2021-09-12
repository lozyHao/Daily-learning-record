// 加载城市数据
$.get('./data/city.json', res => {
    res.forEach((r, i) => {
        let li = $('<li/>').text(r.type);
        if (i == 0) {
            li.addClass('active')
        }
        $('#city').append(li)
    });
})
// 加载种类数据
$.get('./data/type.json', res => {
    res.forEach((r, i) => {
        let li = $('<li/>').text(r.city);
        if (i == 0) {
            li.addClass('active')
        }
        $('#type').append(li)
    });
})
// 加载内容数据
$.get('./data/show.json', res => {
    res.forEach((r, i) => {
        let div = $('<div class="show flex"/>');
        let img = $('<img/>').attr('src', r.img);
        let ul = $('<ul/>');
        let li1 = $('<li class="title"/>').text(r.title);
        let li2 = $('<li/>').text(r.city);
        let li3 = $('<li/>').text(r.type);
        let li4 = $('<li/>').text(r.time);
        ul.append(li1);
        ul.append(li2);
        ul.append(li3);
        ul.append(li4);
        div.append(img);
        div.append(ul);
        $('.content').append(div)
    });
})