import PropTypes from 'prop-types'

import style from './statisticList.module.css'

function StatisticList({items, title}) {
    return (
        <section class="statistics">
            <div class={style.conteiner}>
                <h2 class={style.title}>{title}</h2>
                <ul class={style.statList} >
                    {
                        items.map(function(item) {
                            return (
                                <li key={item.id} class={style.statListItem} >
                                    <span class="label">{item.label}</span>
                                    <span class="percentage">{item.percentage}%</span>
                                </li> 
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

StatisticList.propTypes = {
    items: PropTypes.object.isRequired,
    titel: PropTypes.string.isRequired,
}

export default StatisticList