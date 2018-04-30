describe("测试thumb的increase方法", function () {
    const btn=document.createElement('div');
    const h1=document.createElement('h1');
    const thumb=new Thumb({target:btn,showNum:h1});

    thumb.addThumb();
    thumb.addClick();
    btn.onclick();

    it("increase方法加1函数测试", function () {
        expect(thumb.num).toEqual(1);
    })

    it("生成新的innerHTML", function () {
        expect(h1.innerHTML).toEqual('赞：'+thumb.num+'次');
    })
    
    it("Thumb是否继承于PraiseButton", function () {
        expect(Thumb.prototype.__proto__).toEqual(PraiseButton.prototype);
    })
})