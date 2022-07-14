import React from 'react'
import classNames from 'classnames'
// 枚举类型
export enum ButtonSize {
  large = 'lg',
  small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}
interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children : React.ReactNode,
  href?: string
}
// 获取原生button 所有的类型 
// 使用交叉类型 将BaseButtonProps 与 ButtonHTMLAttributes 合并为一个
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 获取a链接的属性
// 使用交叉类型 将BaseButtonProps 与 AnchorHTMLAttributes 合并为一个
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 将最终的类型 联合起来 NativeButtonProps AnchorButtonProps
// 但是 有些属性在button是必须但在a中是可选的, 这时会出现问题
// （需要将属性都设置为可选类型）使用ts的 Partial完成
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const Button: React.FC<ButtonProps> = (props) => {
  // 取出对应的值
  const {
    disabled,
    className,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props
  // 使用classnames 默认添加 btn样式
  const classes = classNames('btn',className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    // 按钮类型为链接 且 设置disabled 要特殊处理（因为链接没有disabled属性）
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if(btnType === ButtonType.Link && href) {
    return (
      <a 
        {...restProps}
        className={classes}
        href={href}
      >{children}</a>
    )
  } else {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
  
}
// 设置默认值
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button