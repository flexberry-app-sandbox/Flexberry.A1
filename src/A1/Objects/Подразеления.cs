﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.A1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Подразеления.
    /// </summary>
    // *** Start programmer edit section *** (Подразеления CustomAttributes)

    // *** End programmer edit section *** (Подразеления CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПодразеленияE", new string[] {
            "Подразделение as \'Подразделение\'"})]
    [View("ПодразеленияL", new string[] {
            "Подразделение as \'Подразделение\'"})]
    public class Подразеления : ICSSoft.STORMNET.DataObject
    {
        
        private string fПодразделение;
        
        // *** Start programmer edit section *** (Подразеления CustomMembers)

        // *** End programmer edit section *** (Подразеления CustomMembers)

        
        /// <summary>
        /// Подразделение.
        /// </summary>
        // *** Start programmer edit section *** (Подразеления.Подразделение CustomAttributes)

        // *** End programmer edit section *** (Подразеления.Подразделение CustomAttributes)
        [StrLen(255)]
        public virtual string Подразделение
        {
            get
            {
                // *** Start programmer edit section *** (Подразеления.Подразделение Get start)

                // *** End programmer edit section *** (Подразеления.Подразделение Get start)
                string result = this.fПодразделение;
                // *** Start programmer edit section *** (Подразеления.Подразделение Get end)

                // *** End programmer edit section *** (Подразеления.Подразделение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Подразеления.Подразделение Set start)

                // *** End programmer edit section *** (Подразеления.Подразделение Set start)
                this.fПодразделение = value;
                // *** Start programmer edit section *** (Подразеления.Подразделение Set end)

                // *** End programmer edit section *** (Подразеления.Подразделение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПодразеленияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПодразеленияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПодразеленияE", typeof(IIS.A1.Подразеления));
                }
            }
            
            /// <summary>
            /// "ПодразеленияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПодразеленияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПодразеленияL", typeof(IIS.A1.Подразеления));
                }
            }
        }
    }
}
