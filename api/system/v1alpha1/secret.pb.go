// Code generated by protoc-gen-go. DO NOT EDIT.
// source: system/v1alpha1/secret.proto

package v1alpha1

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Secret defines encrypted value in Kuma
type Secret struct {
	// Value of the secret
	Data                 *wrappers.BytesValue `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Secret) Reset()         { *m = Secret{} }
func (m *Secret) String() string { return proto.CompactTextString(m) }
func (*Secret) ProtoMessage()    {}
func (*Secret) Descriptor() ([]byte, []int) {
	return fileDescriptor_d1fd9b3e953ffaf0, []int{0}
}

func (m *Secret) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Secret.Unmarshal(m, b)
}
func (m *Secret) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Secret.Marshal(b, m, deterministic)
}
func (m *Secret) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Secret.Merge(m, src)
}
func (m *Secret) XXX_Size() int {
	return xxx_messageInfo_Secret.Size(m)
}
func (m *Secret) XXX_DiscardUnknown() {
	xxx_messageInfo_Secret.DiscardUnknown(m)
}

var xxx_messageInfo_Secret proto.InternalMessageInfo

func (m *Secret) GetData() *wrappers.BytesValue {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*Secret)(nil), "kuma.system.v1alpha1.Secret")
}

func init() { proto.RegisterFile("system/v1alpha1/secret.proto", fileDescriptor_d1fd9b3e953ffaf0) }

var fileDescriptor_d1fd9b3e953ffaf0 = []byte{
	// 145 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x29, 0xae, 0x2c, 0x2e,
	0x49, 0xcd, 0xd5, 0x2f, 0x33, 0x4c, 0xcc, 0x29, 0xc8, 0x48, 0x34, 0xd4, 0x2f, 0x4e, 0x4d, 0x2e,
	0x4a, 0x2d, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0xc9, 0x2e, 0xcd, 0x4d, 0xd4, 0x83,
	0x28, 0xd1, 0x83, 0x29, 0x91, 0x92, 0x4b, 0xcf, 0xcf, 0x4f, 0xcf, 0x49, 0xd5, 0x07, 0xab, 0x49,
	0x2a, 0x4d, 0xd3, 0x2f, 0x2f, 0x4a, 0x2c, 0x28, 0x48, 0x2d, 0x2a, 0x86, 0xe8, 0x52, 0xb2, 0xe4,
	0x62, 0x0b, 0x06, 0x9b, 0x22, 0xa4, 0xcf, 0xc5, 0x92, 0x92, 0x58, 0x92, 0x28, 0xc1, 0xa8, 0xc0,
	0xa8, 0xc1, 0x6d, 0x24, 0xad, 0x07, 0xd1, 0xa8, 0x07, 0xd3, 0xa8, 0xe7, 0x54, 0x59, 0x92, 0x5a,
	0x1c, 0x96, 0x98, 0x53, 0x9a, 0x1a, 0x04, 0x56, 0xe8, 0xc4, 0x15, 0xc5, 0x01, 0xb3, 0x26, 0x89,
	0x0d, 0xac, 0xcc, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x3d, 0xc8, 0xa2, 0x7a, 0xa3, 0x00, 0x00,
	0x00,
}
