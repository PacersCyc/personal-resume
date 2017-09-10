
var items = document.querySelectorAll('aside .items>li')
var contents = document.querySelectorAll('main>ul')
console.log(items)

items.forEach(function(item){
	item.addEventListener('click',function(){
		items.forEach(function(node){
			node.classList.remove('active')
		})
		this.classList.add('active')
		var index = [].indexOf.call(items,item)
		contents.forEach(function(node){
	      node.style.display = 'none'
	    })
	    contents[index].style.display = 'flex'
	})
})