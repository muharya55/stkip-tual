type SidebarWidgetProps = {
  title: string;
  items: string[];
};

const SidebarWidget = ({ title, items }: SidebarWidgetProps) => {  
  return (
    <div className="sidebar-widget">
      <h5>{title}</h5>
      <ul>
        {items.map((item: any, index: number) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
            <div className="date">{item.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarWidget;
