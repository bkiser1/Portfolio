const openNav = () => {
    $('.openerSpan').on('click', () => {
        console.log('click')
        $('.sidenav').css({ width: "250px" });
        $('#main').css({ marginLeft: "250px" });
        $(".openerSpan").css({ display: 'none' })
    })
}

function closeNav() {
    $('.closebtn, a').on('click', () => {
        $('.sidenav').css({ width: '0' });
        $('#main').css({ marginLeft: '0' });
        $(".openerSpan").show()
    })
}

const showElements = () => {
    $("a").on('click', () => {
        console.log('clicked')
        $("section").show()
    })
}

const funcContainer = () => {
    openNav()
    closeNav()
    showElements()
}

funcContainer()