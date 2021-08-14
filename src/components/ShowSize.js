import React from "react";
import SizeImg from "../images/apparel_sizes_m.png";

const ShowSize = ({ setSizeOpen }) => {
	return (
		<div className="show-size">
			<div className="show-size__modal">
				<div className="show-size__modal__title">
					<h1>Таблица размеров</h1>
					<span>Как снять мерки ?</span>
				</div>
				<div className="show-size__modal__table">
					<div className="show-size__modal__table--title">
						Универсальная размерная сетка: мужская одежда
					</div>
					<table>
						<thead>
							<tr>
								<th>Российский размер RU</th>
								<th>44</th>
								<th>46</th>
								<th>48</th>
								<th>50</th>
								<th>52</th>
								<th>54</th>
								<th>56</th>
								<th>58</th>
								<th>60</th>
								<th>62</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Международный размер INT</td>
								<td>XS</td>
								<td>S</td>
								<td>M</td>
								<td>L</td>
								<td>L/XL</td>
								<td>XL</td>
								<td>XXL</td>
								<td>XXL</td>
								<td>XXXL</td>
								<td>XXXL/4XL</td>
							</tr>
							<tr>
								<td>Обхват груди, см</td>
								<td>88-91</td>
								<td>92-95</td>
								<td>96-99</td>
								<td>100-103</td>
								<td>104-107</td>
								<td>108-111</td>
								<td>112-115</td>
								<td>116-119</td>
								<td>120-124</td>
								<td>125-128</td>
							</tr>
							<tr>
								<td>Обхват талии, см</td>
								<td>78-81</td>
								<td>82-84</td>
								<td>85-87</td>
								<td>88-90</td>
								<td>91-94</td>
								<td>95-99</td>
								<td>100-107</td>
								<td>107-110</td>
								<td>111-115</td>
								<td>116-120</td>
							</tr>
							<tr>
								<td>Обхват бедер, см</td>
								<td>94-97</td>
								<td>98-101</td>
								<td>102-105</td>
								<td>106-108</td>
								<td>109-112</td>
								<td>112-116</td>
								<td>116-120</td>
								<td>121-124</td>
								<td>124-128</td>
								<td>129-133</td>
							</tr>
							<tr>
								<td>Обхват шеи, см</td>
								<td>38</td>
								<td>39</td>
								<td>40</td>
								<td>41</td>
								<td>41/42</td>
								<td>42</td>
								<td>43</td>
								<td>43/44</td>
								<td>44/45</td>
								<td>45/46</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="show-size__modal--merka">
					<div className="merka__wrap">
						<div className="merka__title">Как снять мерки</div>
						<div className="merka__title__text">
							<p>
								Чтобы выбрать правильный размер одежды, рекомендуем снять
								следующие ниже мерки при помощи сантиметровой ленты.
							</p>
						</div>
						<div className="merka__title__text">
							<span>1. Обхват шеи</span>
							<p>
								Чтобы выбрать правильный размер одежды, рекомендуем снять
								следующие ниже мерки при помощи сантиметровой ленты.
							</p>
						</div>
						<div className="merka__title__text">
							<span>2. Обхват груди</span>
							<p>
								Измеряется по наиболее выступающим точкам (исключая выступ
								гортани). Между лентой и шеей должен помещаться палец.
							</p>
						</div>
						<div className="merka__title__text">
							<span>2. Обхват груди</span>
							<p>
								Сантимертровая лента должна проходить по наиболее широкой части
								груди, сбоку - под подмышечными впадинами, обхватывая лопатки
								сзади.
							</p>
						</div>
						<div className="merka__title__text">
							<span>3. Обхват талии</span>
							<p>
								Измеряется горизонтально в самой узкой части талии. При
								измерении лента должна плотно (без натяжения) прилегать к телу.
							</p>
						</div>
						<div className="merka__title__text">
							<span>4. Обхват бедер</span>
							<p>
								Сантиметровая лента проходит строго горизонтально по наиболее
								выступающим точкам ягодиц.
							</p>
						</div>
					</div>
					<div className="merka__wrap__img">
						<img src={SizeImg} alt="" />
					</div>
				</div>
				<i onClick={() => setSizeOpen(false)} className="fas fa-times"></i>
			</div>
		</div>
	);
};

export default ShowSize;
