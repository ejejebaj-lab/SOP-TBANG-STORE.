const modal=document.getElementById('modal'), title=document.getElementById('modalTitle'), content=document.getElementById('modalContent');
function showModal(t,html){title.textContent=t;content.innerHTML=html;modal.hidden=false}
function closeModal(){modal.hidden=true}
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.querySelectorAll('[data-game]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-game]').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');
 const game=btn.dataset.game;document.getElementById('gameTitle').textContent=game.toUpperCase();document.getElementById('gameDescription').textContent='Mizze Cheat · '+game;
 document.getElementById('products').scrollIntoView({behavior:'smooth',block:'start'});
}));
document.querySelectorAll('.product').forEach(btn=>btn.addEventListener('click',()=>{
 const name=btn.dataset.product;
 showModal(name,`<p><b>Giao hàng:</b> Tự động</p><h3>Chọn thời hạn</h3>
 <div class="duration-list">
 <button class="duration-option" data-days="1" data-price="20000"><span>1 ngày</span><strong>20.000đ</strong></button>
 <button class="duration-option" data-days="7" data-price="70000"><span>7 ngày</span><strong>70.000đ</strong></button>
 <button class="duration-option" data-days="31" data-price="140000"><span>31 ngày</span><strong>140.000đ</strong></button>
 </div>
 <div id="selectedPlan" class="status">Chọn gói để tiếp tục.</div>
 <button class="modal-button" id="backProduct">Quay Lại</button>`);
 content.querySelectorAll('.duration-option').forEach(opt=>opt.addEventListener('click',()=>{
   content.querySelectorAll('.duration-option').forEach(o=>o.classList.remove('chosen'));opt.classList.add('chosen');
   document.getElementById('selectedPlan').textContent=`Đã chọn ${opt.dataset.days} ngày — ${Number(opt.dataset.price).toLocaleString('vi-VN')}đ. Bản demo chưa tạo đơn thật.`;
 }));
 document.getElementById('backProduct').addEventListener('click',closeModal);
}));
document.getElementById('couponBtn').addEventListener('click',()=>showModal('Mã giảm giá',`<p>Nhập mã ưu đãi để kiểm tra.</p><label class="field">Mã giảm giá<input id="couponInput" placeholder="Nhập mã giảm giá"></label><div class="status">Mã demo chưa được xác thực trên máy chủ. Chưa áp dụng giảm giá thật.</div><button class="modal-button" id="checkCoupon">Kiểm tra mã</button><button class="modal-button secondary" id="backCoupon">Quay Lại</button>`));
content.addEventListener('click',e=>{if(e.target.id==='checkCoupon'){const v=document.getElementById('couponInput').value.trim();showModal('Kết quả kiểm tra',`<p>${v?'Mã “'+v.replace(/[<>&"]/g,'')+'” chưa được xác thực vì bản demo chưa kết nối máy chủ.':'Mày chưa nhập mã.'}</p><button class="modal-button" id="backCouponResult">Quay Lại</button>`)}});
content.addEventListener('click',e=>{if(e.target.id==='backCoupon'||e.target.id==='backCouponResult')closeModal()});
document.getElementById('sellerBtn').addEventListener('click',()=>showModal('Yêu cầu nạp Seller',`<p>Gửi yêu cầu đăng ký seller. Quản trị viên sẽ duyệt thủ công khi hệ thống được kết nối.</p><label class="field">Tên hiển thị<input id="sellerName" placeholder="Tên của bạn"></label><label class="field">Telegram username<input id="sellerTelegram" placeholder="@username"></label><label class="field">Lý do đăng ký<textarea id="sellerReason" rows="3" placeholder="Mô tả ngắn"></textarea></label><button class="modal-button" id="sendSeller">Gửi yêu cầu demo</button><button class="modal-button secondary" id="cancelSeller">Quay Lại</button>`));
content.addEventListener('click',e=>{if(e.target.id==='sendSeller'){showModal('Bản xem trước', '<div class="status">Biểu mẫu giao diện chưa gửi/lưu yêu cầu. Cần backend và Telegram Bot để xử lý thật.</div><button class="modal-button" id="closeSeller">Quay Lại</button>')}if(e.target.id==='closeSeller'||e.target.id==='cancelSeller')closeModal()});
document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{
 const view=btn.dataset.view;
 document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
 if(view==='buy'){document.getElementById('products').scrollIntoView({behavior:'smooth'});return}
 if(view==='deposit')showModal('Nạp tiền',`<p>Chọn số tiền muốn nạp. Bản demo chưa tạo mã thanh toán SePay.</p><label class="field">Số tiền (VNĐ)<select><option>50.000đ</option><option>100.000đ</option><option>200.000đ</option><option>500.000đ</option></select></label><div class="status">Chưa kết nối SePay; không dùng bản demo để nhận tiền thật.</div><button class="modal-button" id="backDeposit">Quay Lại</button>`);
 if(view==='account')showModal('Cá nhân',`<p><b>SOP TBANG STORE</b></p><p>Số dư demo: 0đ</p><p>Lịch sử đơn hàng và nạp tiền sẽ xuất hiện khi kết nối backend.</p><button class="modal-button" id="supportBtn">Liên hệ hỗ trợ</button><button class="modal-button secondary" id="backAccount">Quay Lại</button>`);
}));
content.addEventListener('click',e=>{if(e.target.id==='supportBtn'){window.open('https://t.me/tranbang0346','_blank','noopener')}if(e.target.id==='backDeposit'||e.target.id==='backAccount')closeModal()});
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let dots=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);dots=Array.from({length:Math.min(65,Math.floor(innerWidth/6))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+.5,s:Math.random()*.45+.12,a:Math.random()*.6+.2}))}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const d of dots){d.y-=d.s;if(d.y<0){d.y=innerHeight;d.x=Math.random()*innerWidth}ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fillStyle=`rgba(208,255,250,${d.a})`;ctx.shadowBlur=9;ctx.shadowColor='#55ffe3';ctx.fill()}requestAnimationFrame(draw)}
addEventListener('resize',resize);resize();draw();