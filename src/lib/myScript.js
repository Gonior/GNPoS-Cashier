/** Dispatch event on click outside of node */
export function clickOutside(node) {
    const handleClick = event => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }

    document.addEventListener('click', handleClick, true);
    
    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}

export function longpress(node, threshold = 500) {
    // note — a complete answer would also consider touch events
  
    const handle_mousedown = () => {
      let start = Date.now();
  
      const timeout = setTimeout(() => {
        node.dispatchEvent(new CustomEvent('longpress'));
      }, threshold);
  
      const cancel = () => {
        clearTimeout(timeout);
        node.removeEventListener('mousemove', cancel);
        node.removeEventListener('mouseup', cancel);
      };
  
      node.addEventListener('mousemove', cancel);
      node.addEventListener('mouseup', cancel);
    }
  
    node.addEventListener('mousedown', handle_mousedown);
  
    return {
      destroy() {
        node.removeEventListener('mousedown', handle_mousedown);
      }
    };
}