export class Init {
    load() {
      if(localStorage.getItem('productos') === null || localStorage.getItem('productos') == undefined) {
        console.log('No products Found... Creating...');
        let prod = [
          {
            id:1,
            codProd:'tec112',
            desProd:'Teclado',
            codProv: 'prov111',
            tipo: 'p',
            done: true
          }, 
          {
            id:2,
            codProd:'mou112',
            desProd:'Mouse',
            codProv: 'prov222',
            tipo: 'p',
            done: true
          }, {
            id:3,
            codProd:'mon112',
            desProd:'Monitor',
            codProv: 'prov333',
            tipo: 'p',
            done: true
          },
        ];
  
        localStorage.setItem('productos', JSON.stringify(prod));
         
      
      } else {
        if(localStorage.getItem('proveedores') === null || localStorage.getItem('proveedores') == undefined) {
          console.log('No proveedor Found... Creating...');
          let prov = [
            {
              id:100,
              codProv:'prov111',
              desProv:'Computers and Software',
              tipo: 'pv',
              done: true            
            }, 
            {
              id:101,
              codProv:'prov222',
              desProv:'Ingenieros y Asociados',
              tipo: 'pv',
              done: true
            }, {
              id:102,
              codProv:'prov333',
              desProv:'Systems & Systems',
              tipo: 'pv',
              done: true
            },
          ];    
          localStorage.setItem('proveedores', JSON.stringify(prov));
          
        } else {
          if(localStorage.getItem('tiendas') === null || localStorage.getItem('tiendas') == undefined) {
            console.log('No tiendas Found... Creating...');
            let tie = [
              {
                id:1000,
                codTien:'tie777',
                desTien:'El mundo del Software',
                tipo: 't',
                done: true            
              }, 
              {
                id:1001,
                codTien:'tie888',
                desTien:'Computers Hernandez',
                tipo: 't',
                done: true
                
              }, {
                id:1002,
                codTien:'tie999',
                desTien:'Store super BIN',
                tipo: 't',
                done: true
              },
            ];
      
            localStorage.setItem('tiendas', JSON.stringify(tie));
             
          } else {
            if(localStorage.getItem('inventario') === null || localStorage.getItem('inventario') == undefined) {
              console.log('No inventario Found... Creating...');
              let inv = [
                {
                  id:10000,
                  codProd:'tec112',
                  cantProd: 40,
                  fecComp:'2019-08-01',
                  tipo: 'i',
                  done: true            
                }, 
                {
                  id:10001,
                  codProd:'mou112',
                  cantProd: 80,
                  fecComp:'2019-08-16',
                  tipo: 'i',
                  done: true
                }, {
                  id:10002,
                  codProd:'mon112',
                  cantProd: 50,
                  fecComp:'2019-07-15',
                  tipo: 'i',
                  done: true
                },
              ];
        
              localStorage.setItem('inventario', JSON.stringify(inv));
              return 
            } else {
              console.log('Found inventario...');
            }
            console.log('Found tiendas...');
          }
          console.log('Found proveedor...');
        }
        console.log('Found products...');
      }


    }
  }